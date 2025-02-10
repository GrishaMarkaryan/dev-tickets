const sliderBtn = document.querySelectorAll('.slider-toggle');
const sliderCircle = document.querySelectorAll('.slider-toggle-circle');

const editBtn = document.querySelectorAll('.column-edit-btn');
const slider = document.querySelector('.section-slider');
const sliderFooterBtns = document.querySelectorAll('.slider-footer-btn');
const sliderSaveBtn = document.querySelector('.btn-save');
const overlay = document.querySelector('.overlay');

const headerDropdownBtn = document.querySelector('.dropdown');
const headerDropdownMenu = document.querySelector('.dropdown-menu');
const sliderStatusCurrent = document.querySelector('.slider-status-current');
const sliderDropdownMenu = document.querySelector('.slider-dropdown-menu');
const statusCurrent = document.querySelector('.status-current');

const sliderInput = document.querySelector('.slider-input');
const sliderCommentTextarea = document.querySelector('.slider-comment-textarea');
const sliderTextareaText = document.querySelector('.slider-textarea-text');

function toggleMenuOpened(button, dropdownMenu) {
    button.addEventListener('click', () => {
        if (dropdownMenu.classList.contains('dropdown-hidden')) {
            dropdownMenu.classList.remove('dropdown-hidden');
            overlay.style.display = 'block';
        } else {
            dropdownMenu.classList.add('dropdown-hidden');
            overlay.style.display = 'none';
        }
    });
}

sliderBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        sliderBtn.forEach((button) => {
            if (button.classList.contains('red')) {
                button.classList.remove('red');
                button.classList.add('black');
            } else {
                button.classList.remove('black');
                button.classList.add('red');
            }
        });
        sliderCircle.forEach(button => {
            if (button.classList.contains('circle-left')) {
                button.classList.remove('circle-left');
            } else {
                button.classList.add('circle-left');
            }
        });
    });
});

editBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (slider.classList.contains('slider-closed')) {
            slider.classList.remove('slider-closed');
            overlay.style.display = 'block';
        }
    });
    btn.addEventListener('mouseenter', () => {
        const img = btn.querySelector('img');
        img.dataset.originalSrc = img.src;
        img.src = '../_icons/edit_white.svg';
    });
    btn.addEventListener('mouseleave', () => {
        const img = btn.querySelector('img');
        img.src = img.dataset.originalSrc;
    });
});

sliderFooterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('btn-save')) {
            if (sliderCommentTextarea.value.trim() === '') {
                sliderCommentTextarea.style.border = '1px solid #F60131';
                sliderTextareaText.style.color = '#F60131';
                sliderTextareaText.style.fontSize = '12px';
                sliderTextareaText.style.top = '12px';
                sliderTextareaText.textContent = 'Заполните поле';
                return;
            } else {
                sliderCommentTextarea.style.border = '1px solid #C3CDDF';
                sliderTextareaText.style.color = '#181A1F';
                sliderTextareaText.style.fontSize = '12px';
                sliderTextareaText.style.top = '12px';
                sliderTextareaText.textContent = 'Текст комментария...';
            }
        }
        if(btn.classList.contains('btn-cancel')) {
            sliderCommentTextarea.style.border = '1px solid #C3CDDF';
            sliderTextareaText.style.color = '#181A1F';
            sliderTextareaText.style.fontSize = '12px';
            sliderTextareaText.style.top = '12px';
            sliderTextareaText.textContent = 'Текст комментария...';
        }

        if (!slider.classList.contains('slider-closed')) {
            slider.classList.add('slider-closed');
            overlay.style.display = 'none';
        }
    });
});

sliderCommentTextarea.addEventListener('input', () => {
    if (sliderCommentTextarea.value.trim() !== '') {
        sliderCommentTextarea.style.border = '1px solid #C3CDDF';
        sliderTextareaText.style.color = '#181A1F';
        sliderTextareaText.style.fontSize = '12px';
        sliderTextareaText.style.top = '12px';
        sliderTextareaText.textContent = 'Текст комментария...';
    }
});

toggleMenuOpened(sliderStatusCurrent, sliderDropdownMenu);
toggleMenuOpened(headerDropdownBtn, headerDropdownMenu);

overlay.addEventListener('click', () => {
    if (!slider.classList.contains('slider-closed')) {
        slider.classList.add('slider-closed');
    }
    if (!headerDropdownMenu.classList.contains('dropdown-hidden')) {
        headerDropdownMenu.classList.add('dropdown-hidden');
    }
    if (!sliderDropdownMenu.classList.contains('dropdown-hidden')) {
        sliderDropdownMenu.classList.add('dropdown-hidden');
    }
    overlay.style.display = 'none';
});

document.addEventListener('click', (event) => {
    if (!sliderDropdownMenu.contains(event.target) && !sliderStatusCurrent.contains(event.target)) {
        sliderDropdownMenu.classList.add('dropdown-hidden');
    }
});

sliderDropdownMenu.addEventListener('click', (event) => {
    if (event.target.classList.contains('slider-status')) {
        statusCurrent.textContent = event.target.textContent;
        sliderDropdownMenu.classList.add('dropdown-hidden');
    }
});

sliderCommentTextarea.addEventListener('click', () => {
    if (!sliderTextareaText.classList.contains('textarea-small')) {
        sliderTextareaText.classList.add('textarea-small');
    }
});

document.addEventListener('click', (e) => {
    if (!sliderInput.contains(e.target) && sliderCommentTextarea.value.trim() === '') {
        sliderTextareaText.classList.remove('textarea-small');
    }
});

const columnPriotity = document.querySelectorAll('.column-priority > div');
columnPriotity.forEach((column) => {
    console.log(column.innerHTML);

    if (column.innerHTML === 'Срочный') {
        const oneLine = column.closest('.one-line');    
        oneLine.style.backgroundColor = '#FFF5F7';
        oneLine.style.borderColor = '#FFDCE3';

        const columnInfoElements = oneLine.querySelectorAll('.column-info')
        columnInfoElements.forEach((columnInfo) => {
            columnInfo.style.borderRightColor = '#FFDCE3';
        })
    }
})