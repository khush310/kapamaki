if (!window.K) {
  K = {

    /**
     * Copies things from source into target.
     *
     */

    copy: function(target, source, overwrite, transform) {
      for (var key in source) {
        if (overwrite || typeof(target[key]) === 'undefined') {
          target[key] = transform ? transform(source[key]) :  source[key];
        }
      }
      return target;
    },

    /**
     * Create a namespaced object.
     */
    create: function(name, value) {
      var node = window.K, // We will use 'K' as root namespace
      nameParts = name ? name.split('.') : [],
      c = nameParts.length;
      for (var i = 0; i < c; i++) {
        var part = nameParts[i];
        var nso = node[part];
        if (!nso) {
          nso = (value && i + 1 == c) ? value : {};
          node[part] = nso;
        }
        node = nso;
      }
      return node;
    },

    /**
     * Copy stuff from one object to the specified namespace that
     * is K.<target>.
     * If the namespace target doesn't exist, it will be created automatically.
     */
    provide: function(target, source, overwrite) {
      // a string means a dot separated object that gets appended to, or created
      return K.copy(
        typeof target == 'string' ? K.create(target) : target,
        source,
        overwrite
      );
    }
  };
}
;
