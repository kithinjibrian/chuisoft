export const actions = {
    get() {
        return new Promise((resolve,reject)=>{
            (async (self)=>{
                try {
                    resolve(await self.$axios.$get("/csrf"))
                } catch({response}) {
                    reject(response.data)
                }
            })(this)
        })
    }
} 