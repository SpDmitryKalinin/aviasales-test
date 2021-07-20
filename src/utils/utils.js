//Проверка на идентичность массивов
function diffArrays(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i=0; i<arr1.length; i++){
        if(arr1[i]!==arr2[i]){
            return false
        }
    }
    return true
}

  //Функция для перевода минут в часы и минуты
function getTimeFromMins(mins){
    let hours = Math.trunc(mins/60);
    let minutes = mins % 60;
    if(minutes<10){
      minutes = '0'+minutes;
    }
    return [hours, minutes];
}

//Функция для определения времени окончания полета
function infoTimes(startFlyght, duration){
    let hours = Number(startFlyght.split(':')[0]);
    let minutes = Number(startFlyght.split(':')[1]);
    minutes = hours * 60 + minutes
    let result = minutes + duration;
    if(result >= 1440){
      result = result - 1440;
    }
    return getTimeFromMins(result);
}

export {diffArrays, getTimeFromMins, infoTimes}



