var rateres = 5
$("#decreaserate").click(function () {
    if (updatecount == 1000) {
        swal.fire({
            title: "you cant set less than 1 second.",
            toast: true,
            animation: null,
            position: 'top',
            allowEscapeKey: false,
            showConfirmButton: false,
            timer: 3000
        })
    } else {
        rateres--
        if (rateres > 4) {
            document.documentElement.style.setProperty('--transsecond', "4s");
        } else {
            document.documentElement.style.setProperty('--transsecond', rateres + "s");
        }
        updatecount -= 1000
        user_pref.setItem("custom_update", updatecount)
        $("#textcount").text(rateres)
        swal.fire({
            title: "new refresh rate:",
            text: rateres,
            toast: true,
            animation: null,
            position: 'top',
            allowEscapeKey: false,
            showConfirmButton: false,
            timer: 3000
        })
    }
})

$("#increaserate").click(function () {
    rateres++
    if (rateres > 4) {
        document.documentElement.style.setProperty('--transsecond', "4s");
    } else {
        document.documentElement.style.setProperty('--transsecond', rateres + "s");
    }
    updatecount += 1000
    user_pref.setItem("custom_update", updatecount)
    $("#textcount").text(rateres)
    swal.fire({
        title: "new refresh rate:",
        text: rateres,
        toast: true,
        animation: null,
        position: 'top',
        allowEscapeKey: false,
        showConfirmButton: false,
        timer: 3000
    })
})