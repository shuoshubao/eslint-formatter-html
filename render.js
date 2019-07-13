(async () => {
    const nodeBody = document.body;
    const nodeHead = document.head;
    const defaultPrefix = 'https://raw.githubusercontent.com/shuoshubao/eslint-formatter-html/master';

    document.title = 'ESLint Report';

    const fetchFile = (filePath = '') => {
        return fetch(`${[defaultPrefix, filePath].join('/')}`).then(res => res.text());
    };
    const appendElement = (options = {}) => {
        const { tagName = '', innerHTML = '', targetNode = nodeBody, src = '', attrs } = options;
        return new Promise((resolve, reject) => {
            const Ele = document.createElement(tagName);
            if (innerHTML) {
                Ele.innerHTML = innerHTML;
            }
            if (attrs) {
                Object.entries(attrs).forEach(([k, v]) => {
                    Ele[k] = v;
                });
            }
            targetNode.appendChild(Ele);
            if (tagName === 'script' && src) {
                Ele.src = src;
                Ele.onload = () => {
                    resolve();
                };
            } else {
                resolve();
            }
        });
    };

    const Resources = [
        // 'https://unpkg.com/vue@2.6.10/dist/vue.js',
        'https://unpkg.com/vue@2.6.10/dist/vue.min.js',
        'https://unpkg.com/element-ui@2.8.2/lib/index.js',
        'https://unpkg.com/vue-clipboard2@0.3.0/dist/vue-clipboard.min.js',
        'https://unpkg.com/lodash@4.17.11/lodash.js'
    ];

    appendElement({
        targetNode: nodeHead,
        tagName: 'link',
        attrs: {
            rel: 'stylesheet',
            href: 'https://unpkg.com/element-ui@2.8.2/lib/theme-chalk/index.css'
        }
    });

    Promise.all([
        fetchFile('lib/template.html'),
        fetchFile('lib/script.js'),
        fetchFile('lib/style.css'),
        ...Resources.map(v => {
            return appendElement({
                targetNode: nodeBody,
                tagName: 'script',
                src: v
            });
        })
    ]).then(res => {
        const [templateText, scriptText, styleText] = res;
        appendElement({
            targetNode: nodeHead,
            tagName: 'style',
            innerHTML: styleText
        });
        appendElement({
            targetNode: nodeBody,
            tagName: 'div',
            innerHTML: templateText
        });
        appendElement({
            targetNode: nodeBody,
            tagName: 'script',
            innerHTML: scriptText
        });
    });
})();
