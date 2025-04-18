document.addEventListener("DOMContentLoaded", function () {
    const alarmList = document.querySelector(".alarm-list");
    const alarms = Array.from(alarmList.children);
  
    alarms.forEach((alarm, index) => {
      alarm.setAttribute("data-original-index", index);
    });
  
    alarmList.querySelectorAll(".material-icons").forEach(icon => {
      icon.style.cursor = "pointer";
  
      icon.addEventListener("click", function () {
        const alarm = icon.closest(".alarm");
  
        if (icon.innerText === "bookmark_border") {
          icon.innerText = "bookmark";
        } else {
          icon.innerText = "bookmark_border";
        }
  
        const allAlarms = Array.from(alarmList.children);
  
        const sorted = allAlarms.sort((a, b) => {
          const aBookmarked = a.querySelector(".material-icons").innerText === "bookmark";
          const bBookmarked = b.querySelector(".material-icons").innerText === "bookmark";
  
          if (aBookmarked && !bBookmarked) return -1;
          if (!aBookmarked && bBookmarked) return 1;
  
          return (
            parseInt(a.getAttribute("data-original-index")) -
            parseInt(b.getAttribute("data-original-index"))
          );
        });
  
        // 다시 append
        sorted.forEach(alarm => alarmList.appendChild(alarm));
      });
    });
  });