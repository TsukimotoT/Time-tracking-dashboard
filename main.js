const daily = document.getElementById("daily-btn")
const weekly = document.getElementById("weekly-btn")
const monthly = document.getElementById("monthly-btn")

const current = document.getElementsByClassName('current-hours')
const previous = document.getElementsByClassName('previous-hours')

const dailyData = () => {
    fetch("data.json")
        .then(res => {
            return res.json()
        })
        .then(loadedData => {
            Array.from(current).forEach((element, index) => {
                current[index].textContent = `${loadedData[index].timeframes.daily.current}hrs`
                previous[index].textContent = `Last Week - ${loadedData[index].timeframes.daily.previous}hrs`
            })
        })
        .catch(err => {
            console.error(err)
        })
}

const weeklyData = () => {
    fetch("data.json")
        .then(res => {
            return res.json()
        })
        .then(loadedData => {
            Array.from(current).forEach((element, index) => {
                current[index].textContent = `${loadedData[index].timeframes.weekly.current}hrs`
                previous[index].textContent = `Last Week - ${loadedData[index].timeframes.weekly.previous}hrs`
            })
        })
        .catch(err => {
            console.error(err)
        })
}

const monthlyData = () => {
    fetch("data.json")
        .then(res => {
            return res.json()
        })
        .then(loadedData => {
            Array.from(current).forEach((element, index) => {
                current[index].textContent = `${loadedData[index].timeframes.monthly.current}hrs`
                previous[index].textContent = `Last Week - ${loadedData[index].timeframes.monthly.previous}hrs`
            })
        })
        .catch(err => {
            console.error(err)
        })
}

daily.addEventListener('click', () => {
    daily.classList.add('active')
    weekly.classList.remove('active')
    monthly.classList.remove('active')
    dailyData()

})

weekly.addEventListener('click', () => {
    weekly.classList.add('active')
    daily.classList.remove('active')
    monthly.classList.remove('active')
    weeklyData()

})

monthly.addEventListener('click', () => {
    monthly.classList.add('active')
    daily.classList.remove('active')
    weekly.classList.remove('active')
    monthlyData()

})







// const buttons = document.querySelectorAll('.period-btn')

// const activateClickedButton = (daily) => {
//     weeklys.forEach(b => b.classList.remove('active'))
//     weekly.classList.add('active')

// }

// weeklys.forEach(weekly => {
//     weekly.addEventListener('click', () => {
//         activateClickedButton(weekly)
//         dailyData()
//     })
// })
