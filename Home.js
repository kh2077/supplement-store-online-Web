document.addEventListener('DOMContentLoaded', function() {

    // 1. التعامل مع زر "All Categories" (القائمة المنسدلة)
    const categoriesToggleButton = document.querySelector('.categories-toggle-btn');
    const categoriesList = document.querySelector('.categories-list');

    // وظيفة تبديل عرض القائمة عند الضغط على الزر
    if (categoriesToggleButton && categoriesList) {
        categoriesToggleButton.addEventListener('click', function() {
            // تبديل خاصية العرض بين 'block' و 'none'
            if (categoriesList.style.display === 'block') {
                categoriesList.style.display = 'none';
            } else {
                categoriesList.style.display = 'block';
            }
        });

        // إخفاء القائمة عند النقر خارجها (لأجهزة سطح المكتب واللمس)
        document.addEventListener('click', function(event) {
            const isClickInside = categoriesToggleButton.contains(event.target) || categoriesList.contains(event.target);
            if (!isClickInside && categoriesList.style.display === 'block') {
                categoriesList.style.display = 'none';
            }
        });
    }


    // 2. تحديث عدد العناصر في زر السلة (Cart Update)
    const cartButton = document.querySelector('.cart-btn');
    const addToCartButtons = document.querySelectorAll('.product-card .btn-add-to-cart'); // يفترض وجود زر في بطاقات المنتجات
    let cartItemCount = 0;

    function updateCartDisplay() {
        // تحديث النص في زر السلة الرئيسي (مثل (0) أو (5))
        cartButton.innerHTML = `<i class="fas fa-shopping-basket"></i> (${cartItemCount})`;
    }

    // مثال على تفاعلية بسيطة لـ "Add to Cart"
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault(); 
            cartItemCount++; 
            updateCartDisplay();
            console.log("Item added to cart.");
        });
    });


    // 3. محاكاة تفاعلات الأزرار الأخرى (Favorites, Search Icon)
    const favoritesButton = document.querySelector('.favorites-btn');
    favoritesButton.addEventListener('click', function() {
        alert("Redirecting to Favorites page.");
    });
    
    const searchButtonIcon = document.querySelector('.search-btn-icon');
    const searchInput = document.querySelector('.search-bar-container input');
    
    searchButtonIcon.addEventListener('click', function() {
        if (searchInput.value.trim() !== '') {
            alert(`Searching for: ${searchInput.value.trim()}`);
            // يمكن إضافة رمز البحث الفعلي هنا
        }
    });

    updateCartDisplay(); // إعداد العرض الأولي للسلة

});
//kh
function searchSupplement() {
  let searchValue = document.querySelector(".input-field").value.toUpperCase();
  let supplements = document.querySelectorAll(".supplement");
  let supplementNames = document.getElementsByTagName("button");

  for (let i = 0; i < supplementNames.length; i++){
    if (supplementNames[i].innerText.toUpperCase().includes(searchValue) && searchValue !== "") {
      supplements[i].style.display = "block";
    } else {
      supplements[i].style.display = "none"; 
    }
  }
}
//
