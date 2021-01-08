export { CrcaReduxFirebase } from './src/CrcaReduxFirebase.js';

export {
  setFirebaseConfigDev,
  setFirebaseConfigProd,
} from './src/redux/actions.js';

export { crcaFirebase } from './src/redux/reducer.js';

export {
  crcaFirebaseInitSelector,
  crcaFirebaseRemoteConfigInitSelector,
  crcaFirebaseRemoteConfigConfigSelector,
  crcaFirebaseRemoteConfigLastFetchSelector,
  crcaFirebaseRemoteConfigGetSelector,
  TYPE_VALUE_BOOLEAN,
  TYPE_VALUE_INT,
} from './src/redux/selectors.js';

export {
  FILTRO_TYPE_BOOLEAN,
  FILTRO_TYPE_ENTITY,
  FILTRO_TYPE_STRING,
  ORDER_ASC,
  ORDER_DESC,
  dataViewGenerate,
  dateFirebase2Js,
  existDiffObject,
  filterData,
  filterAndSortData,
  isDefined,
  isObject,
  joinParts,
  sortData,
} from './src/utils/data-view-util.js';

export {
  getQueryCollectionByProp,
  getQueryCollectionByPropSorted,
  getQueryCollectionSorted,
} from './src/utils/repository.js';