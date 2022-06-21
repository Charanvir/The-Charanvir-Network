function formatedDate(date) {
    return `${new Date(date).getFullYear()}/${new Date(date).getMonth() + 1}/${new Date(date).getDate()} @ ${new Date(date).getHours()}:${new Date(date).getMinutes()}`;
}

module.exports = formatedDate