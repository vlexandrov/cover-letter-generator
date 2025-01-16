document.addEventListener("DOMContentLoaded", function() {
    const today = new Date();
    document.getElementById("day").value = today.getDate();
    document.getElementById("month").value = today.getMonth() + 1;
    document.getElementById("year").value = today.getFullYear();
});

document.getElementById("todayButton").addEventListener("click", function() {
    const today = new Date();
    document.getElementById("day").value = today.getDate();
    document.getElementById("month").value = today.getMonth() + 1;
    document.getElementById("year").value = today.getFullYear();
});

document.getElementById("generateButton").addEventListener("click", function() {
    const companyName = document.getElementById("companyName").value;
    const companyAddress = document.getElementById("companyAddress").value;
    const jobRole = document.getElementById("jobRole").value;
    const jobListingPage = document.getElementById("jobListingPage").value;
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const date = `${day}/${month}/${year}`;

    let coverLetterTemplate = `[NAME]
[ADDRESS LINE 1]
[ADDRESS LINE 2]
Mobile: [MOBILE NUMBER HERE]
Email: [EMAIL HERE]

${date}

${companyName}
${companyAddress}

To the hiring team at ${companyName},

As a client-facing support engineer with a background in both cloud and on-premises environments, \
I am keen to apply for the ${jobRole} position at ${companyName}, as advertised on ${jobListingPage}.

In my recent role as a [REDACTED], I provided technical support for AWS Serverless technologies like Lambda, API Gateway, \
and Step Functions. Practicing [REDACTED] strong commitment to customer obsession, I closely collaborated with customers – serving as their primary point of contact – \
to understand their issues, investigate root causes of incidents, and deliver comprehensive solutions within stringent service level agreements while consistently \
maintaining a [REDACTED - METRIC]. This role sharpened my problem-solving abilities and required me to efficiently drive complex issues to resolution, \
often developing custom Lambda code or APIs to support internal and external clients in a fast-paced environment.

Prior to that, as a [REDACTED], I managed computer and network systems for a diverse range of clients throughout \
the Auckland region. I handled everything from hardware and software issues in clients’ computer systems to site-wide network challenges involving equipment and network \
configurations, always aiming to improve processes and enhance service delivery. Additionally, I took initiative in leading the team’s efforts towards automating routine \
tasks by developing PowerShell and Python scripts for our provisioning and decommissioning procedures, which contributed to a more efficient and responsive service desk \
and streamlined the company’s IT asset management processes.

!!!!!!!! [ADD EVERYTHING ELSE ???] !!!!!!!!

Thank you for considering my application. I am enthusiastic about the opportunity to contribute to ${companyName}, and I look forward to hearing from you.


Kind regards,
[NAME]`;

    //document.getElementById("coverLetterOutput").value = coverLetterTemplate;
    const coverLetterOutput = document.getElementById("coverLetterOutput");
    coverLetterOutput.value = coverLetterTemplate;
    coverLetterOutput.style.height = '1px';
    setTimeout(() => {
        coverLetterOutput.style.height = coverLetterOutput.scrollHeight + 'px';
    }, 0);
});

document.getElementById("copyButton").addEventListener("click", function() {
    const coverLetterOutput = document.getElementById("coverLetterOutput");
    coverLetterOutput.select();
    coverLetterOutput.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(coverLetterOutput.value).then(() => {
        alert('Cover letter copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});