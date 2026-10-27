
(function () {
    String.prototype.ensureStart = function (str) {
        const current = this.toString();

        if (!current.startsWith(str)) {
            return str + current;
        }

        return current;
    };

    String.prototype.ensureEnd = function (str) {
        const current = this.toString();

        if (!current.endsWith(str)) {
            return current + str;
        }

        return current;
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {
        const text = this.toString();

        if (text.length <= n) {
            return text;
        }

        if (n < 4) {
            return ".".repeat(n);
        }

        const lastSpace = text.slice(0, n - 2).lastIndexOf(" ");

        if (lastSpace !== -1) {
            return text.slice(0, lastSpace) + "...";
        }

        return text.slice(0, n - 3) + "...";
    };

    String.format = function (string, ...params) {
        return string.replace(/\{(\d+)\}/g, (match, index) => {
            return params[index] !== undefined ? params[index] : match;
        });
    };
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
str = String.format('jumps {0} {1}',
  'dog');
