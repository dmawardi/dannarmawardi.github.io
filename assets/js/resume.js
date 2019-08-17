var detailTextArea = $('#detailText');

var resumeDetails = {
    jll: '<ul> <li>Manager, BI & Analytics</li> <li>JLL</li> <li>Dec 2017 – Present</li> <li>Melbourne, Australia</li> <li>Department of Treasury & Finance - Shared Service Provider Account</li> </ul> <br/> Responsibilities include: <ul class="responsibilityList "> <li>Analysis of data for KPI requirements</li> <li>Ad-hoc data analysis to provide insights into problems/questions</li> <li>EDA/Data wrangling using Python</li> <li>Building Python scripts for process automation</li> <li>Building of dashboards for client/internal purposes using Tableau</li> <li>Build data visualisations for client reporting documentation</li> <li>Management of ASA access permissions for portal for both client and internal staff</li> <li>Manage data governance for applications used on account</li> <li>Use of AlteryX for building workflows for automation</li> <li>Prepare/present information systems KPI performance monthly</li> </ul>',
    usm: '<ul> <li>Strategic Advisor</li> <li>PT Usahatama Sentosa Mas</li> <li>Feb 2014 – Late 2016</li> <li>Greater Jakarta Area, Indonesia</li> <li>PT Usahatama Sentosa Mas is the commercial distributor of the principal manufacturer PT Triyasa Nagamas Farma. PT Usahatama Sentosa Mas focuses on distribution of pharmaceutical medications such as: Contraception (Inserts and Pills), Cough/Flu Medication, Paracetamol, Supplements, and emergency contraception.</li> </ul> <br />Responsibilities include: <ul class="responsibilityList"> <li>Distribution/production management and issue resolution</li> <li>Engaged in company wide strategy formulation and implementation</li> <li>Attendance at all meetings of PT Usahatama Sentosa Mas and principal manufacturer PT Triyasa Nagamas Farma (Marketing division)</li> </ul>',
    little: '<ul> <li>Associate Property Manager</li> <li>LITTLE Real Estate</li> <li>May 2016 – Oct 2016</li> <li>Port Melbourne, Victoria, Australia</li> <li>LITTLE Real Estate is Australias largest independently owned real estate agency with offices throughout Australia offering sales, leasing, and property management services. </li> </ul> <br /> Responsibilities include: <ul class="responsibilityList"> <li>Routine/final/condition inspections and reports</li> <li>Conducting Open for Inspections (OFIs)</li> <li>Lease sign ups/renewals & processing tenancy applications</li> <li>Managing the maintenance / repairs of properties</li> <li>Market rent reviews</li> <li>Managing relationships with tenants/owners/tradesman</li> </ul>'

}


function clearAndDisplayJobDetails(jobID) {
    detailTextArea.empty();
    // Declare variables
    var article = $('<article>');
    var p = $('<p>');

    p.html(resumeDetails[jobID]);
    article.append(p);

    detailTextArea.append(article);


}


$('tr').on('click', function () {
    console.log('clicking a resume button!');
    let jobID = $(this).attr('data-jobDetail');
    console.log(jobID);
    clearAndDisplayJobDetails(jobID);
})



$(document).ready(function () {
    console.log('connected to resume!')

});