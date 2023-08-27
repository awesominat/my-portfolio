function UnixTimeConverter({ unixTimestamp }) {
    const date = new Date(unixTimestamp * 1000);
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    return `${month} ${year}`;
}

export default UnixTimeConverter;