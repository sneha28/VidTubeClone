export const API_key = 'AIzaSyDtGaVEgitVsG1lKO4EQ0uqX-ii_1stPGQ'

export const value_converter = (value) => {
    if(value>=1000000){
        return Math.floor(value/1000000) + "M"
    }
    else if (value>=1000){
        return Math.floor(value/1000) + "K"
    }
    else {
        return value;
    }
}