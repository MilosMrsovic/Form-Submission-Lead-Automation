# LEAD AUTOMATION SYSTEM

Built by [Heaq Digital](https://heaqdigital.com), an automation studio for US service businesses. Full write-up: Speed to lead automation https://heaqdigital.com/speed-to-lead-automation

This project is a fully automated lead management workflow designed to streamline lead intake, scoring, follow-up timing, and email communication. It combines **Zapier**, **Google Sheets**, and **JavaScript** code steps to ensure qualified leads are promptly contacted, data is centralized, and all actions are logged for transparency and efficiency.

## ARCHITECTURE OVERVIEW

1. **Lead Intake**
   - Leads are captured through either **YouTube Forms** or **Facebook Forms**.  
   - Each submission immediately triggers the first Zap to process the data.

2. **Instant Scoring (JavaScript Code)**
   - Calculates a **qualification score** automatically based on submission data.  
   - Pushes both the score and original fields into the **Main Sheet**, centralizing all lead data for further processing.

3. **Main Processing Zap**
   The workflow is triggered when a new entry lands in the Main Sheet:
   - **Data Cleanup**: Uses a **Lookup Table** to translate resource abbreviations (e.g., YT → YouTube, FB → Facebook) for professional reporting.  
   - **Qualification Gate**: A **Filter** ensures only leads with a score **3.0 or higher** continue. Low-scoring leads stop here.  
   - **Follow-up Time Calculation**: Adds 90 minutes to the original submission timestamp to determine the exact follow-up moment.  
   - **Delay Handling**: Zap enters **Delay Until** mode, pausing until the calculated follow-up time.

4. **Final Execution**
   - **Final Formatting**: Ensures the date and time are in a user-friendly format for the email template.  
   - **Email Delivery**: Sends a professional, templated email to the qualified lead with personalized data.  
   - **Status Update**: Updates the **Contacted** field in the Main Sheet from `Not Yet` to `Contacted`, closing the loop.

## DATA FLOW

Lead Submission (YouTube / Facebook Form)
↓
Zap 1 – JavaScript Scoring → Main Sheet
↓
Zap 2 – Data Cleanup → Qualification Filter → Calculate Follow-up → Delay Until → Format Email → Send Email → Update Status

- Each component is modular, allowing easy adjustments or additional rules for lead scoring, follow-up timing, or messaging.

## REQUIREMENTS

- **Zapier account** (cloud-based)  
- **Google Sheets** for data storage  
- **JavaScript** knowledge for custom scoring code  
- Gmail or SMTP account for sending emails  

## HOW IT WORKS

1. Leads submit forms via YouTube or Facebook.  
2. The first Zap calculates a qualification score and centralizes data in the Main Sheet.  
3. The main Zap cleans incoming data, applies the qualification filter, calculates follow-up time, waits the required duration, formats the email, and sends it.  
4. Finally, the status of the lead is updated in Google Sheets, providing a complete audit trail.

## BENEFITS

- Eliminates manual lead scoring and follow-up scheduling.  
- Provides **real-time visibility** of qualified leads.  
- Ensures professional, consistent communication.  
- Fully modular — easy to extend with more lead sources, scoring rules, or email templates.  
- Error handling and logging ensures no lead is lost or mishandled.

## VISUALS

- **Workflow Diagram**: Attached to visualize the step-by-step flow of data.  
- **Data & Error Handling Video**: Demonstrates how the automation works in practice.
