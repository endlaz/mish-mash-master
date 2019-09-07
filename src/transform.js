module.exports.groupAdultsByAgeRange = (adults) => {
    return adults.filter(adult => {
            if (adult.age >= 18) {
                return adult
            }
        })
        .reduce((groupByAge, adult) => {
            if (adult.age <= 20) {
                if ('20 and younger' in groupByAge === false) {
                    groupByAge['20 and younger'] = []
                }
                groupByAge['20 and younger'].push(adult)
            } else if (adult.age <= 30) {
                if ('21-30' in groupByAge === false) {
                    groupByAge['21-30'] = []
                }
                groupByAge['21-30'].push(adult)
            } else if (adult.age <= 40) {
                if ('31-40' in groupByAge === false) {
                    groupByAge['31-40'] = []
                }
                groupByAge['31-40'].push(adult)
            } else if (adult.age <= 50) {
                if ('41-50' in groupByAge === false) {
                    groupByAge['41-50'] = []
                }
                groupByAge['41-50'].push(adult)
            } else if (adult.age >= 51) {
                if ('51 and older' in groupByAge === false) {
                    groupByAge['51 and older'] = []
                }
                groupByAge['51 and older'].push(adult)
            }
            return groupByAge
        }, {})
}