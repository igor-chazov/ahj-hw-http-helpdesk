export default class DeleteModal {
  constructor(parentEl, addModalEl) {
    this.parentEl = parentEl;
    this.addModalEl = addModalEl;
    this.modal = document.createElement('div');
  }

  init() {
    this.modal.classList.add('modal', 'delete-modal', 'hidden');

    this.modal.innerHTML = '<h2 class="modal-title">Удалить тикет</h2>\n'
      + '                     <div class="modal-text">Вы уверены, что хотите удалить тикет? Это действие необратимо.</div>\n'
      + '                     <div class="btn-box">\n'
      + '                       <button class="del-cancel-btn" type="button">Отмена</button>\n'
      + '                       <button class="del-ok-btn" type="submit">Ок</button>\n'
      + '                     </div>';

    this.parentEl.append(this.modal);
    this.deleteModal = document.querySelector('.delete-modal');
    this.cancelDelBtn = this.modal.querySelector('.del-cancel-btn');
    this.okDelBtn = this.modal.querySelector('.del-ok-btn');
  }

  openDeleteModal() {
    if (!this.addModalEl.modal.classList.contains('hidden')) {
      this.addModalEl.modal.classList.add('hidden');
    }

    this.deleteModal.classList.remove('hidden');
    this.deleteModal.style.top = `${(window.innerHeight - this.deleteModal.offsetHeight) / 2}px`;
    this.deleteModal.style.left = `${(window.innerWidth - this.deleteModal.offsetWidth) / 2}px`;
    this.cancelDelBtn.addEventListener('click', () => this.closeDeleteModal());
  }

  closeDeleteModal() {
    this.deleteModal.classList.add('hidden');
  }
}
