import { LitElement } from 'lit-element';
import { connect, updateMetadata } from 'pwa-helpers';

import { crcaStore } from '@ascenso/crca-redux-store';

import { crcaMetadata } from './redux/reducer.js';
import { crcaMetadataMetadataSelector } from './redux/selectors.js';

crcaStore.addReducers({
  crcaMetadata
})

export class CrcaReduxUpdateMetadata extends connect(crcaStore)(LitElement) {

  static get properties() {
    return {
      metadata: { type: Object }
    };
  }

  stateChanged(state) {
    this.metadata = crcaMetadataMetadataSelector(state);
  }

  updated(changedProperties) {
    if(changedProperties.has('metadata')) {
      if(this.metadata) {
        updateMetadata(this.metadata);
      }
    }
  }
}
