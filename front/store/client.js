export const actions = {
    post({dispatch},data) {
        return new Promise((resolve,reject)=>{
            (async (self,dispatch,data)=>{
                try {
                    const {XsrfToken} = await dispatch("xsrf/get",null,{root:true})
                    resolve(await self.$axios.$post("/client/post",data,{
                        headers:{
                            'CSRF-Token':XsrfToken
                        }
                    }))
                } catch({response}) {
                    reject(response.data)
                }
            })(this,dispatch,data)
        })
    }
} 