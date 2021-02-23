export const sortFunction = async (objs, sortType, order) => {
    if (order == "ascending") {
        if (sortType == "name") {
            objs.sort(function (a, b) {
                if (a.name > b.name)
                    return 1
                else if (b.name > a.name)
                    return -1
                else
                    return 0
            })
        } else if (sortType == "count") {
            objs.sort(function (a, b) {
                if (a.count > b.count)
                    return 1
                else if (b.count > a.count)
                    return -1
                else
                    return 0
            })
        }
    }

    return objs
}


export const sortByDate = (data) => {
    data.sort(function (a, b) {
        var dateA = new Date(a.date),
            dateB = new Date(b.date);
        return dateA - dateB;
    });
}


