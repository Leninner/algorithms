function dayOfProgrammer(year) {
    if (year >= 1700 && year <= 1917) {
        if (year % 4 == 0) {
            console.log(
                ((366 - 256) / ((366 - 256) / 12).toFixed()).toFixed() +
                    "." +
                    "0" +
                    ((365 - 256) / 12).toFixed() +
                    "." +
                    year
            );
        } else {
            console.log(
                ((333 - 256) / ((333 - 256) / 12).toFixed()).toFixed() +
                    "." +
                    "0" +
                    ((365 - 256) / 12).toFixed() +
                    "." +
                    year
            );
        }
    } else if (year >= 1918 && year <= 2700) {
        if (year % 400 == 0 || (year % 100 != 0 && year % 4 == 0)) {
            console.log(
                ((366 - 256) / ((366 - 256) / 12).toFixed()).toFixed() +
                    "." +
                    "0" +
                    ((365 - 256) / 12).toFixed() +
                    "." +
                    year
            );
        } else {
            if (year == 1918) {
                console.log(
                    parseInt(
                        ((333 - 256) / ((333 - 256) / 12).toFixed()).toFixed()
                    ) +
                        13 +
                        ".0" +
                        ((365 - 256) / 12).toFixed() +
                        "." +
                        year
                );
            } else {
                console.log(
                    ((333 - 256) / ((333 - 256) / 12).toFixed()).toFixed() +
                        "." +
                        "0" +
                        ((365 - 256) / 12).toFixed() +
                        "." +
                        year
                );
            }
        }
    }
}
dayOfProgrammer(1918);
dayOfProgrammer(2700);
dayOfProgrammer(2017);
dayOfProgrammer(2021);
dayOfProgrammer(2024);
