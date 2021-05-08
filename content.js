let observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (!mutation.addedNodes.length) return
        for (let i = 0; i < mutation.addedNodes.length; i++) {
            // do things to your newly added nodes here
            let node = mutation.addedNodes[i]
            if (node == document.getElementById("tc7e")) {
                console.log("here");
                node.id = "notTc7e";
                observer.disconnect()
            }
        }
    })
});

observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
});