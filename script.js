function openCity(evt, cityName) {
    let i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function updateCityTimes() {
    const now = new Date();
    
    // London (UTC+0)
    const londonTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/London' }));
    document.getElementById('london-time').textContent = londonTime.toLocaleTimeString('en-GB');
    
    // Paris (UTC+1)
    const parisTime = new Date(now.toLocaleString('en-US', { timeZone: 'Europe/Paris' }));
    document.getElementById('paris-time').textContent = parisTime.toLocaleTimeString('en-GB');
    
    // Tokyo (UTC+9)
    const tokyoTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' }));
    document.getElementById('tokyo-time').textContent = tokyoTime.toLocaleTimeString('en-GB');
}

// Update times every second
setInterval(updateCityTimes, 1000);

// Initial time update
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tablinks').click();
    updateCityTimes();
});
