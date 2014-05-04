var pullRequestIcons = document.querySelectorAll('.octicon-git-pull-request');
for(var i=0;i<pullRequestIcons.length;i++){
    pullRequestIcons[i].parentElement.parentElement.style.display = 'none';
}
