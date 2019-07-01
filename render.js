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

    const templateText = await fetchFile('lib/template.html');
    const scriptText = await fetchFile('lib/script.js');
    const styleText = await fetchFile('lib/style.css');

    appendElement({
        targetNode: nodeHead,
        tagName: 'link',
        attrs: {
            rel: 'stylesheet',
            href: 'https://unpkg.com/element-ui@2.8.2/lib/theme-chalk/index.css'
        }
    });

    appendElement({
        targetNode: nodeHead,
        tagName: 'link',
        attrs: {
            rel: 'shortcut icon',
            href: 'https://eslint.org/img/favicon.512x512.png'
        }
    });

    await appendElement({
        targetNode: nodeHead,
        tagName: 'style',
        innerHTML: styleText
    });
    await appendElement({
        targetNode: nodeBody,
        tagName: 'div',
        innerHTML: templateText
    });
    await appendElement({
        targetNode: nodeBody,
        tagName: 'script',
        src: 'https://unpkg.com/vue@2.6.10/dist/vue.min.js'
    });
    await appendElement({
        targetNode: nodeBody,
        tagName: 'script',
        src: 'https://unpkg.com/element-ui@2.8.2/lib/index.js'
    });
    await appendElement({
        targetNode: nodeBody,
        tagName: 'script',
        src: 'https://unpkg.com/vue-clipboard2@0.3.0/dist/vue-clipboard.min.js'
    });
    await appendElement({
        targetNode: nodeBody,
        tagName: 'script',
        src: 'https://unpkg.com/lodash@4.17.11/lodash.js'
    });
    await appendElement({
        targetNode: nodeBody,
        tagName: 'script',
        innerHTML: scriptText
    });
})();
