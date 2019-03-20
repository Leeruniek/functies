const escape = match => source => source.replace(match, "\\$&")

/**
 * Make safe for RegExp'ing.
 *
 * @name       escapeRegExp
 * @tag        String
 * @signature  (source: string): string
 * @see        {@link escapeHTML}
 *
 * @param  {string}  source  Input string
 *
 * @returns  {string}
 *
 * @example
 * escapeRegExp( "lorem. ipsum [dolor]" )
 * // => "lorem \\. ipsum \\[dolor\\]"
 */
const escapeRegExp = escape(/[|\\{}<>()[\]^$+*?.]/g)

export { escapeRegExp }

/**
 * Escape HTML special chars for safe rendering.
 *
 * @name       escapeHTML
 * @tag        String
 * @signature  (source: string): string
 * @see        {@link escapeRegExp}
 *
 * @param  {string}  source  Input string
 *
 * @returns  {string}
 *
 * @example
 * escapeHTML("<script>alert('HERE'S BOBBY')</script>")
 * // => "&lt;script&gt;alert(&#39;HERE&#39;S BOBBY&#39;)&lt;&#47;script&gt;"
 */
const escapeHTML = source =>
  source.replace(
    /[\"&'\/<>]/g,
    char =>
      ({
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "/": "&#47;",
        "<": "&lt;",
        ">": "&gt;",
      }[char])
  )

export { escapeHTML }
