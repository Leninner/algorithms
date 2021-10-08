function timeConversion(s) {
    let formato = s.slice(-2);
    if (formato == "AM") {
        let hora = s.slice(0, 2);
        if (hora == "12") {
            return s.replace(hora, "00").slice(0, -2);
        } else {
            return s.slice(0, -2);
        }
    } else {
        let hora = s.slice(0, 2);
        switch (hora) {
            case "01":
                return s.replace(hora, "13").slice(0, -2);
                break;
            case "02":
                return s.replace(hora, "14").slice(0, -2);
                break;
            case "03":
                return s.replace(hora, "15").slice(0, -2);
                break;
            case "04":
                return s.replace(hora, "16").slice(0, -2);
                break;
            case "05":
                return s.replace(hora, "17").slice(0, -2);
                break;
            case "06":
                return s.replace(hora, "18").slice(0, -2);
                break;
            case "07":
                return s.replace(hora, "19").slice(0, -2);
                break;
            case "08":
                return s.replace(hora, "20").slice(0, -2);
                break;
            case "09":
                return s.replace(hora, "21").slice(0, -2);
                break;
            case "10":
                return s.replace(hora, "22").slice(0, -2);
                break;
            case "11":
                return s.replace(hora, "23").slice(0, -2);
                break;
            case "12":
                return s.slice(0, -2);
                break;
        }
    }
}

timeConversion("12:05:45AM");
