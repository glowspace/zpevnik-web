<script>
import { isEqual, isEmpty } from 'lodash-es';

export default {
  data() {
    return {
      internalParams: {},
    };
  },

  methods: {
    updateHistoryState(push = true, force) {
      let oldParams = this.$route.query;
      let newParams = toGETParameters(this.historyStateObject);
      this.internalParams = newParams;

      if (isEqual(oldParams, newParams) && !force) {
        return;
      }

      const update = push ? this.$router.push : this.$router.replace;
      update({
        name: 'search',
        query: toGETParameters(this.historyStateObject),
      }).catch((err) => {
        // empty catch prevents errors when navigating to the current route
      });
    },

    applyStateChange() {
      let GETparameters = this.$route.query;

      if (!isEqual(this.internalParams, GETparameters)) {
        // path was really changed by the user (not from updateHistoryState)
        this.historyStateObject = fromGETParameters(GETparameters);
      }

      if (hasInvalidGETParameters(GETparameters) || isEmpty(GETparameters)) {
        // we want to normalize the GET parameters
        this.updateHistoryState(false);
      }
    },
  },
};

export function toGETParameters(
  params = {
    searchString: '',
    filters: {
      tags: [],
      languages: [],
      songbooks: [],
    },
    sort: {
      by: 0,
      desc: false,
    },
    seed: null,
    showAuthors: false,
  }
) {
  const joinKeys = (obj) => (Object.keys(obj).length ? Object.keys(obj).join(',') : undefined);

  let get = {
    text: params.searchString ? params.searchString.replace(/\s/g, '_') : undefined,
    stitky: joinKeys(params.filters.tags),
    jazyky: joinKeys(params.filters.languages),
    zpevniky: joinKeys(params.filters.songbooks),
    autori: params.showAuthors ? 'ano' : undefined,
    razeni: params.sort.by > 0 && !params.searchString ? String(params.sort.by) : undefined,
    sestupne: params.sort.desc && !params.searchString ? 'ano' : undefined,
    nahoda: params.seed ? String(params.seed) : undefined,
  };
  // delete undefined items
  Object.keys(get).forEach((key) => {
    if (get[key] === undefined) {
      delete get[key];
    }
  });
  return get;
}

const validParameters = [
  'text',
  'stitky',
  'jazyky',
  'zpevniky',
  'autori',
  'razeni',
  'sestupne',
  'nahoda',
];

function hasInvalidGETParameters(params) {
  Object.keys(params).forEach(function (p) {
    if (!validParameters.includes(p)) {
      return true;
    }
  });
  return false;
}

function fromGETParameters(params) {
  const keysToObj = function (str) {
    if (isEmpty(str)) return {};

    return str
      .split(',')
      .filter((str) => str.length)
      .reduce((obj, key, _) => {
        obj[key] = true;
        return obj;
      }, {});
  };

  return {
    searchString: params.text ? params.text.replace(/_/g, ' ') : '',
    filters: {
      tags: keysToObj(params.stitky),
      languages: keysToObj(params.jazyky),
      songbooks: keysToObj(params.zpevniky),
    },
    showAuthors: !!params.autori,
    sort: {
      by: params.razeni ? parseInt(params.razeni) : 0,
      desc: !!params.sestupne,
    },
    seed: parseInt(params.nahoda),
  };
}
</script>
