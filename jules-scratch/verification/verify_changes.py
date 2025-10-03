from playwright.sync_api import sync_playwright, Page, expect

def run_verification(page: Page):
    """
    Navigates to the portfolio page and takes a screenshot to verify the refactoring.
    """
    # 1. Navigate to the application
    # The dev server is usually on port 5173 for Vite
    page.goto("http://localhost:5173")

    # 2. Wait for a key element to be visible to ensure the page is loaded
    # The "My Work" heading is a good candidate
    expect(page.get_by_role("heading", name="My Work")).to_be_visible(timeout=10000)

    # Give some time for animations to settle
    page.wait_for_timeout(2000)

    # 3. Take a screenshot of the entire page
    page.screenshot(path="jules-scratch/verification/verification.png", full_page=True)

def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        run_verification(page)
        browser.close()

if __name__ == "__main__":
    main()