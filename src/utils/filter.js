export const getItemsForDispatcherTable = (alarmsList, carrierList, cargoList, causesList) =>{
    return alarmsList.map(alarm => {
        //const carrierName = carrierList.filter( carrier => carrier.id === alarm.carrier )[0].name;
        //const cargoName = cargoList.filter( cargo => cargo.id === alarm.cargo )[0].name;
        //const causesName = causesList.filter( causes => causes.id === alarm.causes )[0].name;
        return {
            id: alarm.alarmId,
            time: alarm.time,
            regNumber: alarm.regNumber,
            alarm: alarm.alarmDescription,
            cargo: alarm.cargo,
            route: alarm.route,
            customer: alarm.customer,
            carrier: alarm.carrier
        } 
    })
}
