import { useParams, Link } from "react-router-dom";
import placeholderImage from "./../assets/placeholder.png";
import studentsData from "./../assets/students.json";

function StudentDetailsPage() {
  const { studentId } = useParams();   // ← obtiene el ID desde la URL

  const studentProfile = studentsData.find(
    (student) => student._id === studentId
  );

  return (
    <div className="StudentDetailsPage bg-gray-100 py-6 px-4 border-2 border-fuchsia-500 m-2">
      <h1>Student Details Page</h1>

      <div className="bg-white p-8 rounded-lg shadow-md mb-6">
        {studentProfile && (
          <>
            <img
              src={studentProfile.image || placeholderImage}
              alt="profile-photo"
              className="rounded-full w-32 h-32 object-cover border-2 border-gray-300"
            />

            <h1 className="text-2xl mt-4 font-bold absolute">
              {studentProfile.firstName} {studentProfile.lastName}
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-24 mb-4 border-b pb-4">
              <p><strong>LinkedIn:</strong> {studentProfile.linkedinUrl}</p>
              <p><strong>Email:</strong> {studentProfile.email}</p>
              <p><strong>Languages:</strong> {studentProfile.languages.join(", ")}</p>
              <p><strong>Program:</strong> {studentProfile.program}</p>
              <p><strong>Background:</strong> {studentProfile.background}</p>
              <p><strong>Cohort:</strong> {studentProfile.cohort}</p>
            </div>

            {/* Back button */}
            <Link to="/">
              <button className="text-white px-4 py-2 rounded bg-green-500 hover:bg-green-600">
                Back
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default StudentDetailsPage;
