export const getCelsius = (temp) =>{
    const farenheit = (temp.Maximum.Value + temp.Minimum.Value)/2;
    const celsium = ((farenheit - 32)*5)/9;
    return celsium.toFixed(0);
}
