
export const renderNote = (noteArray) => {

 let newNOte =   noteArray.map(item => {

        return  (`<div class="single-note shadow">
        <div class="d-flex align-center title-container">
            <span class="single-note-title">${item.title}</span>
           <button data-type="delete" data-id=${item.id} class="button del-btn v-hidden">
               <span data-type="delete" data-id=${item.id} class="material-icons-outlined">
                   delete
               </span>
           </button></div>
           <p>${item.note}</p>
           <div class="options d-flex gap-md">
             <button data-type="pinned" data-id=${item.id} class="button btn id=${item.id} pinned-btn v-hidden">
               <span data-type="pinned" data-id=${item.id} class="${item.isPinned ? 'material-icons' : 'material-icons-outlined'}">
                   push_pin
               </span>
           </button>
                <button data-type="archive" data-id=${item.id} class="button btn pinned-btn v-hidden">
               <span data-type="archive" class="material-icons-outlined" data-id=${item.id}>
                   archive
               </span>
           </button>
           </div>
           </div>`);

    });

    return newNOte.join("");

}