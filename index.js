function concatElements(...args) {
      const array = [];

      for (let i = 0; i < args.length; i++) {
            if (typeof args[i] === "object" && args[i].length !== undefined) {
                  for (let j = 0; j < args[i].length; j++) {
                        array[array.length] = args[i][j];
                  }
            } else {
                  array[array.length] = args[i];
            }
      }

      return array;
}

module.exports = concatElements;
