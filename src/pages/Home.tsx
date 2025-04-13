const Home = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-white dark:bg-gray-900 shadow-md rounded-lg">
      <div className="space-y-10">
        {/* Header */}
        <header className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Bruce Nguyen</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">San Marcos, CA 92069</p>
          <p className="text-blue-600 dark:text-blue-400">
            <a href="mailto:techgiganet@gmail.com" className="hover:underline">techgiganet@gmail.com</a>
          </p>
          <p className="text-blue-600 dark:text-blue-400">
            <a href="tel:+16786124510" className="hover:underline">+1 678-612-4510</a>
          </p>
        </header>

        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Experienced Firmware & Software Engineer</h2>
          <p className="text-gray-700 dark:text-gray-300">
            Innovative and results-driven engineer with expertise in firmware development, mobile app
            integration, and cloud-based IoT solutions. Proficient in BLE communication, AWS infrastructure
            automation, and full-stack mobile development. Adept at working in fast-paced environments,
            collaborating with cross-functional teams, and implementing scalable solutions.
          </p>
        </section>

        {/* Work Experience */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Work Experience</h2>
          
          {/* Job 1 */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Firmware Engineer</h3>
                <p className="text-lg text-gray-800 dark:text-gray-200">Confidential – Remote</p>
              </div>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                August 2024 – Present
              </span>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Developed BLE communication protocols for a medical pump feeder device, enabling seamless iOS and Android integration.</li>
              <li>Automated AWS CI/CD pipeline for Lambda, DynamoDB, S3, and Cognito deployment using TypeScript and AWS CDK.</li>
              <li>Engineered a Flutter-based mobile application for iOS and Android, synchronizing real-time data with the cloud.</li>
              <li>Designed and implemented background video splash screens to enhance user experience.</li>
              <li>Developed role-based access control (RBAC) to enable different app functionalities based on user roles.</li>
              <li>Led STM32 firmware integration for Amazon Sidewalk, enabling secure IoT communication.</li>
              <li>Built real-time device telemetry collection and processing using AWS IoT infrastructure, with data storage in DynamoDB through AWS Stream subscriptions.</li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Data Engineer and Tech Lead</h3>
                <p className="text-lg text-gray-800 dark:text-gray-200">METRO.digital – Remote</p>
              </div>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                May 2023 – June 2024
              </span>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Engineered and maintained data pipelines using Apache Beam on Google Cloud Dataflow for business analytics.</li>
              <li>Integrated authentication using GCP serverless services.</li>
              <li>Implemented Pub/Sub messaging services for real-time distributed data exchange, enhancing system responsiveness.</li>
              <li>Created Terraform scripts for automated deployment of cloud resources across multiple environments.</li>
              <li>Optimized data access using Google Cloud Storage (GCS) IO connectors, reducing development overhead.</li>
            </ul>
          </div>

          {/* Job 3 */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Engineering Consultant</h3>
                <p className="text-lg text-gray-800 dark:text-gray-200">The Home Depot – Remote</p>
              </div>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                October 2021 – April 2023
              </span>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Designed a scalable model serving architecture leveraging Google Vertex AI and custom containers for real-time inference.</li>
              <li>Conducted research on TensorFlow and ONNX optimizations to enhance model performance.</li>
              <li>Facilitated knowledge transfer and code sharing within data science teams.</li>
            </ul>
          </div>

          {/* Job 4 */}
          <div className="mb-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Senior Software Engineer</h3>
                <p className="text-lg text-gray-800 dark:text-gray-200">Hearst Digital – Atlanta, GA</p>
              </div>
              <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                March 2018 – October 2021
              </span>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Developed a cross-browser video player serving 5 million daily users using React.</li>
              <li>Built a browser video plugin optimized for ad performance using HTML5 and native JavaScript.</li>
              <li>Wrote unit tests using Enzyme and Jest to ensure code reliability.</li>
              <li>Designed and implemented a data pipeline for vehicle data ingestion using Node.js and MongoDB.</li>
              <li>Led automated testing efforts in a CI/CD environment.</li>
              <li>Mentored junior developers.</li>
            </ul>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 italic">
            (Additional experience available upon request)
          </p>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Bachelor of Science</h3>
              <p className="text-gray-800 dark:text-gray-200">Stevens Institute of Technology, Hoboken, NJ</p>
            </div>
            <span className="text-gray-600 dark:text-gray-400">
              September 1987 – June 1992
            </span>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li><span className="font-semibold">Firmware & Embedded Systems:</span> STM32, Amazon Sidewalk, BLE, IoT, RTOS</li>
            <li><span className="font-semibold">Mobile Development:</span> Flutter, iOS, Android, React Native</li>
            <li><span className="font-semibold">Cloud & DevOps:</span> AWS (Lambda, DynamoDB, IoT Core, Cognito, S3, CDK), Google Cloud (Dataflow, Vertex AI, Pub/Sub), Terraform</li>
            <li><span className="font-semibold">Programming Languages:</span> TypeScript, Python, C, Java, Node.js</li>
            <li><span className="font-semibold">Front-End Development:</span> React, Angular, JavaScript, HTML5, D3.js</li>
            <li><span className="font-semibold">Databases:</span> PostgreSQL, MySQL, MongoDB</li>
            <li><span className="font-semibold">CI/CD & Automation:</span> Docker, GitHub Actions, Maven, Agile methodologies</li>
          </ul>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Certifications & Achievements</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            <li>AWS Certified Solutions Architect – Associate (In Progress)</li>
            <li>Contributed to multiple open-source projects in cloud infrastructure and IoT solutions.</li>
          </ul>
        </section>

        {/* Relocation */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Willing to relocate</h2>
          {/* <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              San Diego, CA
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              Portland, OR
            </span>
            <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              Seattle, WA
            </span>
          </div> */}
        </section>
      </div>
    </div>
  );
};

export default Home; 