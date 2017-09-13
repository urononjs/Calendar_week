var calendarJson = {
    "mo": [
        {
            "bt": 240,
            "et": 779
        }
    ],
    "tu": [],
    "we": [],
    "th": [
        {
            "bt": 240,
            "et": 779
        },
        {
            "bt": 1140,
            "et": 1319
        }
    ],
    "fr": [
        {
            "bt": 660,
            "et": 1019
        }
    ],
    "sa": [
        {
            "bt": 0,
            "et": 1439
        }
    ],
    "su": []
};















document.write("<table>");





document.write("<td>");


for ( dayOfTime = 1; dayOfTime <=24; dayOfTime ++) {


    document.write ( "<td>" + dayOfTime + "</td>");

}


document.write("</td>");





for ( dayOfWeek in calendarJson ) {


    document.write("<tr>");
    document.write("<td>" + dayOfWeek + "</td>");

    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("<td></td>");
    document.write("</tr>");
}



document.write("</table>");











