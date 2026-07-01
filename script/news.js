const newsGrid = document.getElementById("news-grid");

function displayBlogs() {

    newsGrid.innerHTML = "";

    blogs.forEach(blog => {

        newsGrid.innerHTML += `

        <div class="card-outer">

            <div class="card-inner">

                <div class="blog-image">
                    <img src="${blog.image}" alt="${blog.title}">
                </div>

                <div class="blog-content">

                    <a href="blog.html?slug=${blog.slug}">
                        <h3>${blog.title}</h3>
                    </a>

                    <p>${blog.description}</p>

                    <a href="blog.html?slug=${blog.slug}" class="blog-btn">
                        Read More »
                    </a>

                </div>

            </div>

        </div>

        `;

    });

}

displayBlogs();

