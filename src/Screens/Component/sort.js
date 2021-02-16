export const sortFunction = async (objs, sortType) => {
    if (sortType == "name") {
        objs.sort(function (a, b){
            if (a.name > b.name)
                return 1
            else if (b.name > a.name)
                return -1
            else
                return 0
        })
    } else if(sortType=="count") {
        objs.sort(function (a, b){
            if (a.count < b.count)
                return 1
            else if (b.count < a.count)
                return -1
            else
                return 0
        })   
     }
     return objs
}


