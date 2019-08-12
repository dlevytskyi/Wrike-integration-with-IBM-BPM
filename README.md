# Wrike-integration-with-IBM-BPM

'Wrike integration with IBM BPM' extension app.

Application integrate and synchronize tasks betweend two systems: Wrike and IBM BPM.

[Video Presentation](https://youtu.be/lCCmXGDqZsc)

Extension ask IBM BPM application about new task every some configurable period.

Extension create in Wrike 'Shared with me folder' next structure:

- Under 'Root' folder > 'IBM BPM Integration' folder
- Under 'IBM BPM Integration' folder > folders which means processes in IBM BPM.
- Next step is adding tasks to the Process Folders and assign to Wrike User Groups

- Application will create all structures in first iteration,
  next iterations will update data.
- Application generate url to IBM Process Center where user will continue work on task.

## IBM BPM

IBM BPM is a platform designed to optimize business processes. It allows users to streamline and manage tasks and track performance.

IBM BPM organizes, manages, monitors and deploys process artifacts, applications and services from the business process management program,
with a set of adapters so users can service-enable their assets including packaged,
custom and heritage applications, technology protocols and databases.

### New IBM Product is BAW, which contain IBM BPM

Extension is compatable with BAW.

[More about BAW](https://www.ibm.com/products/business-automation-workflow)
