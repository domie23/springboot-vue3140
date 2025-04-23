const base = {
    get() {
        return {
            url : "http://localhost:8080/yiliaoxitong/",
            name: "yiliaoxitong",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/yiliaoxitong/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "医疗系统"
        } 
    }
}
export default base
