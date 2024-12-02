function validateForm() {
    const username = document.getElementById("myusername").value.trim();
    const gradeSection = document.getElementById("grade-section").value.trim();
    const email = document.getElementById("email").value.trim();
    const problem = document.getElementById("problem").value;
    const status = document.querySelector('input[name="status"]:checked');

    // Log the data to verify
    console.log(username, gradeSection, email, problem, status);

    // Validate the data
    if (!username || !gradeSection || !email || !problem || !status) {
        alert("All fields are required. Please fill them out.");
        return false;
    }

    // Validate email format
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Store the first name in localStorage for future use (greeting)
    const firstName = username.split(",")[1]?.trim() || username;
    localStorage.setItem("myusername", firstName);

    // Redirect to home.html after successful sign-in
    window.location.href = "home.html";
    return false;  // Prevent form submission
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

document.getElementById('moodScale').addEventListener('input', function () {
    var moodValue = this.value;
    document.getElementById('moodValue').textContent = moodValue + '%';

    var adviceText = '';

    if (moodValue <= 30) {
        adviceText = `
            <strong>Low Mood:</strong> It's okay to feel down sometimes. Consider these strategies:
            <ul>
                <li><strong>Exercise:</strong> Physical activity boosts serotonin, which helps improve mood.</li>
                <li><strong>Mindfulness Meditation:</strong> Reducing stress through meditation can enhance emotional well-being.</li>
                <li><strong>Social Connection:</strong> Talking to a friend or family member can help increase feelings of support.</li>
                <li><strong>Sleep:</strong> Getting quality sleep helps regulate mood and mental health.</li>
            </ul>
            If your mood persists, consider speaking with a healthcare professional to explore additional support.
        `;
    } else if (moodValue <= 60) {
        adviceText = `
            <strong>Moderate Mood:</strong> You’re doing okay! Keep these habits in mind to enhance your well-being:
            <ul>
                <li><strong>Regular Exercise:</strong> Regular movement helps balance mood-regulating chemicals like dopamine.</li>
                <li><strong>Balanced Nutrition:</strong> A diet rich in fruits, vegetables, and omega-3 fatty acids supports brain health.</li>
                <li><strong>Positive Self-Talk:</strong> Cognitive-behavioral strategies, like reframing negative thoughts, can increase self-esteem.</li>
                <li><strong>Mindfulness and Relaxation:</strong> Practices such as deep breathing or progressive muscle relaxation can maintain mental clarity.</li>
            </ul>
            You are on a great path – keep nurturing yourself!
        `;
    } else {
        adviceText = `
            <strong>High Mood:</strong> Wonderful! You're feeling good, but it's important to keep a balanced approach:
            <ul>
                <li><strong>Maintain Regular Sleep:</strong> Even when feeling upbeat, ensure you maintain healthy sleep hygiene.</li>
                <li><strong>Gratitude Practices:</strong> Journaling things you're grateful for can sustain positive mental health.</li>
                <li><strong>Moderate Stress:</strong> High energy can sometimes mask underlying stress. Consider stress-reduction activities like yoga.</li>
                <li><strong>Mindful Engagement:</strong> Stay engaged in activities that bring you joy but avoid burnout by taking breaks.</li>
            </ul>
            Keep cultivating your positivity and remember to stay balanced!
        `;
    }

    document.getElementById('adviceText').innerHTML = adviceText;
});
