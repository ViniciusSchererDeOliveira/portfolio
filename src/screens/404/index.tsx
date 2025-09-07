export default function NotFound() {
  return (
    <div class="home-container">
      <header>
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you're looking for doesn't exist.</p>
      </header>

      <main>
        <section>
          <h2>What happened?</h2>
          <p>
            You might have typed the URL incorrectly or the page may have been
            moved or deleted.
          </p>
          <p>
            <a href="/">Go back to Home</a>
          </p>
        </section>
      </main>
    </div>
  );
}
