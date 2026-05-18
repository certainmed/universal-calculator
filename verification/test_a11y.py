from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)

    # Test Desktop Navigation (aria-current)
    desktop_context = browser.new_context()
    page = desktop_context.new_page()
    page.route("**/*", lambda route: route.continue_() if "localhost" in route.request.url else route.abort())
    page.goto("http://localhost:8000", wait_until="networkidle")

    # Wait for navigation to be injected
    page.wait_for_selector(".nav-item")
    page.wait_for_timeout(1000)

    # Click "Percentage Calculator" calculator
    percent_btn = page.locator(".nav-item", has_text="Percentage Calculator").first
    percent_btn.click(force=True)

    # Verify aria-current="page" is set
    assert percent_btn.get_attribute("aria-current") == "page"

    # Click "Quadratic Equation" calculator
    quad_btn = page.locator(".nav-item", has_text="Quadratic Equation").first
    quad_btn.click(force=True)

    # Verify aria-current is updated
    assert quad_btn.get_attribute("aria-current") == "page"
    assert percent_btn.get_attribute("aria-current") is None

    desktop_context.close()

    # Test Mobile Menu (aria-expanded)
    mobile_context = browser.new_context(viewport={"width": 400, "height": 800})
    page = mobile_context.new_page()
    page.route("**/*", lambda route: route.continue_() if "localhost" in route.request.url else route.abort())
    page.goto("http://localhost:8000", wait_until="networkidle")

    # Wait for mobile menu button
    menu_btn = page.locator("#mobile-menu-btn")

    # Verify initial state
    assert menu_btn.get_attribute("aria-expanded") == "false"

    # Open sidebar
    menu_btn.click()
    page.wait_for_selector(".sidebar.active")
    assert menu_btn.get_attribute("aria-expanded") == "true"

    # Click a calculator to close sidebar
    percent_btn = page.locator(".nav-item", has_text="Percentage Calculator").first
    percent_btn.click(force=True)
    assert menu_btn.get_attribute("aria-expanded") == "false"

    # Re-open and close by clicking outside
    menu_btn.click()
    page.wait_for_selector(".sidebar.active")
    page.mouse.click(10, 10) # click somewhere outside the sidebar
    assert menu_btn.get_attribute("aria-expanded") == "false"

    mobile_context.close()
    browser.close()
    print("All ARIA attribute tests passed!")

with sync_playwright() as playwright:
    run(playwright)
