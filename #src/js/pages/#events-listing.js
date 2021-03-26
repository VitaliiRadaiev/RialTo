{
    let eventsList = document.querySelector('.events-listing__body');
    if(eventsList) {
        let observer = new MutationObserver(mutationRecords => {
            lazyLoadHandler();
          });
          
          observer.observe(eventsList, {
            childList: true, 
          });
    }
}
