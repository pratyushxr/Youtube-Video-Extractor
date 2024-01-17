// Function to display tags
function displayTags(tags) {
    const tagsContainer = document.getElementById('tags');
    tagsContainer.innerHTML = '';

    if (Array.isArray(tags) && tags.length > 0) {
        tags.forEach(tag => {
            const tagElement = document.createElement('div');
            tagElement.className = 'tag';
            tagElement.innerHTML = `
                <span class="tag-text">${tag}</span>
                <span class="close" onclick="removeTag(this)">×</span>
            `;
            tagsContainer.appendChild(tagElement);
        });
    } else {
        tagsContainer.textContent = tags;
    }
}

// Function to extract video tags
function extractVideoTags(videoId) {
    const apiKey = 'Give Your Api Key'; // Replace with your YouTube API key
    const apiUrl = `Give Your Api Ur`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.items && data.items.length > 0) {
                const tags = data.items[0].snippet.tags;
                displayTags(tags);
                showTagsBox();
                showCopyTagsButton(tags);
                showClearTagsButton();
            } else {
                displayTags("Video not found");
                showTagsBox();
                hideCopyTagsButton();
                hideClearTagsButton();
            }
        })
        .catch(error => {
            displayTags("Error fetching data");
            showTagsBox
            console.error(error);
            hideCopyTagsButton();
            hideClearTagsButton();
        });
}

// Event listener for the Extract Tags button
document.getElementById('extractButton').addEventListener('click', () => {
    const videoUrl = document.getElementById('videoUrl').value;
    if (videoUrl) {
        const videoId = getVideoId(videoUrl);
    if (videoId) {
        extractVideoTags(videoId);
    } else {
        displayTags("Invalid YouTube URL");
        showTagsBox();
        hideCopyTagsButton();
        hideClearTagsButton();
    }
}
});

// Function to get video ID from URL
function getVideoId(url) {
    const regex = /v=([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

// Function to show the Copy Tags button
function showCopyTagsButton(tags) {
    const copyTagsButton = document.getElementById('copyTagsButton');
    if (tags.length > 0) {
        copyTagsButton.style.display = 'inline-block';
    } else {
        copyTagsButton.style.display = 'none';
    }
}

// Function to hide the Copy Tags button
function hideCopyTagsButton() {
    const copyTagsButton = document.getElementById('copyTagsButton');
    copyTagsButton.style.display = 'none';
}

// Function to show the Clear Tags button
function showClearTagsButton() {
    const clearTagsButton = document.getElementById('clearTagsButton');
    clearTagsButton.style.display = 'inline-block';
}

// Function to hide the Clear Tags button
function hideClearTagsButton() {
    const clearTagsButton = document.getElementById('clearTagsButton');
    clearTagsButton.style.display = 'none';
}

// Function to clear all tags
function clearAllTags() {
    const tagsContainer = document.getElementById('tags');
    tagsContainer.innerHTML = '';
    hideCopyTagsButton();
    hideClearTagsButton();
    hideTagsBox();
}

// Function to show the tags box
function showTagsBox() {
    const tagsBox = document.getElementById('tags');
    tagsBox.style.display = 'inline-block';
}

// Function to hide the tags box
function hideTagsBox() {
    const tagsBox = document.getElementById('tags');
    tagsBox.style.display = 'none';
}

// Event listener for the Clear Tags button
document.getElementById('clearTagsButton').addEventListener('click', clearAllTags);

// Function to remove a single tag
function removeTag(element) {
    const tagElement = element.parentElement;
    const tagsContainer = document.getElementById('tags');
    tagsContainer.removeChild(tagElement);
    hideCopyTagsButton();
    hideClearTagsButton();
}

// Event listener for the Copy Tags button
document.getElementById('copyTagsButton').addEventListener('click', () => {
    const tagsText = getTagsText();
    copyToClipboard(tagsText);
});

// Function to get tags as text
function getTagsText() {
    const tags = Array.from(document.querySelectorAll('.tag-text')).map(tag => tag.textContent);
    return tags.join(', ');
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Tags copied to clipboard');
}
function removeTag(element) {
    const tagElement = element.parentElement;
    const tagText = tagElement.querySelector('.tag-text').textContent;
    const tagsContainer = document.getElementById('tags');
    tagsContainer.removeChild(tagElement);
    // You can remove the hideCopyTagsButton() line
}
