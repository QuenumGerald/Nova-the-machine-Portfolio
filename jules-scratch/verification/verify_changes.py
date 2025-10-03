from playwright.sync_api import sync_playwright, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()

    try:
        page.goto("http://localhost:5173/")

        # Wait for the page to load and animations to complete
        page.wait_for_selector("h1")
        page.wait_for_timeout(1000)  # Wait 1 second for animations

        # Take a screenshot of the hero section
        hero_section = page.locator("section").first
        hero_section.screenshot(path="jules-scratch/verification/hero_screenshot.png")

        # Fill out the contact form
        page.get_by_placeholder("Your Name").fill("Jules")
        page.get_by_placeholder("Your Email").fill("jules@example.com")
        page.get_by_placeholder("Your Message").fill("This is a test message.")

        # Take a screenshot of the filled form
        contact_form = page.locator("form")
        contact_form.screenshot(path="jules-scratch/verification/form_filled_screenshot.png")

        # Submit the form
        page.get_by_role("button", name="Send Message").click()

        # Check that the form is cleared
        expect(page.get_by_placeholder("Your Name")).to_have_value("")
        expect(page.get_by_placeholder("Your Email")).to_have_value("")
        expect(page.get_by_placeholder("Your Message")).to_have_value("")

        print("Verification successful!")

    except Exception as e:
        print(f"An error occurred: {e}")
        page.screenshot(path="jules-scratch/verification/error.png")

    finally:
        browser.close()

with sync_playwright() as p:
    run(p)