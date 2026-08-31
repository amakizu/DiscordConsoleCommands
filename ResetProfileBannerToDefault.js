let wreq = webpackChunkdiscord_app.push([[Symbol()], {}, r => r]);
webpackChunkdiscord_app.pop();

const chunks = Object.entries(wreq.m);

const findChunkByCode = (...codes) => {
    for (const [id, func] of chunks) {
        const chunkCode = func.toString();
        if (codes.every(code => chunkCode.includes(code))) {
            return wreq(id);
        }
    }
};

const api = Object.values(findChunkByCode("HTTPUtils"))
    .find(e => e?.patch);

api.patch({
    url: "/users/@me/profile",
    body: {
        accent_color: null
    }
}).then(() => {
    console.log("Banner color reset.");
}).catch(console.error);
