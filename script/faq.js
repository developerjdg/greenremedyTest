document.addEventListener('DOMContentLoaded', function () {
    var faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
        var question = item.querySelector('.faq-question');

        question.addEventListener('click', function () {
            var isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(function (otherItem) {
                otherItem.classList.remove('active');
            });

            // If the clicked item wasn't already open, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});