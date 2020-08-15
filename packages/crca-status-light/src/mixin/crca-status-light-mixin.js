export const CrcaStatusLightMixin = Superclass =>
  class extends Superclass {
    static get properties() {
      return {
        order: { type: String },
        value: { type: Number },
        success: { type: Number },
        warning: { type: Number },
        danger: { type: Number },
        status: { type: String },
      };
    }

    constructor() {
      super();
      this.order = 'asc';
      this.success = null;
      this.warning = null;
      this.danger = null;
    }

    getClass(value) {
      const numeric = ['number', 'bigint'];
      if (numeric.indexOf(typeof value) === -1) {
        return '';
      }
      if (this.order === 'asc') {
        if (this.dander !== null && value <= this.danger) {
          return 'danger';
        }
        if (this.warning !== null && value <= this.warning) {
          return 'warning';
        }
        if (
          this.success === null ||
          (this.success !== null && value >= this.success)
        ) {
          return 'success';
        }
      }

      if (this.order === 'desc') {
        if (this.danger !== null && value >= this.danger) {
          return 'danger';
        }
        if (this.warning !== null && value >= this.warning) {
          return 'warning';
        }
        if (
          this.success === null ||
          (this.success !== null && value <= this.success)
        ) {
          return 'success';
        }
      }
      return '';
    }

    updated(changedProperties) {
      if (changedProperties.has('value')) {
        const newStatus = this.getClass(this.value);
        if (this.status !== newStatus) {
          this.status = newStatus;
          this.dispatchEvent(
            new CustomEvent('crca-status-light-change', {
              detail: {
                status: newStatus,
              },
            })
          );
        }
      }
    }
  };
