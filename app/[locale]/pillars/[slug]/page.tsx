"use client";

import { useParams } from "next/navigation";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { pillarsData } from "../data";

export default function PillarPage() {
    const { slug:pillar } = useParams<{ slug: string }>();

  const data = pillarsData[pillar as string];
  const Section = ({ title, children, bgColor = 'bg-white' }: { title: string; children: React.ReactNode; bgColor?: string }) => (
    <section className={`py-10 px-6 md:px-12 ${bgColor} rounded-lg shadow-lg mb-8`}>
      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 border-b-2 border-blue-500 pb-2">{title}</h2>
      <div className="text-gray-800 leading-relaxed">{children}</div>
    </section>
  );

  const COLORS = ['#EF4444', '#3B82F6', '#22C55E', '#F97316', '#A855F7'];

  if (!data) return <div className="p-10">Pillar not found.</div>;

  return (
    <div className="min-h-screen w-full overflow-hidden p-1 pt-3 sm:p-3 pb-10">
      {/* Main Content */}
      <main className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold mb-2 flex items-center gap-3">
          <data.icon className="h-8 w-8 text-indigo-600" /> {data.title}
        </h1>
        <p className="text-base sm:text-lg text-gray-700 mb-8">{data.description}</p>
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {data.stats.map((s) => (
            <div
              key={s.label}
              className="p-6 rounded-xl bg-indigo-50 text-center shadow"
            >
              <p className="text-3xl font-bold text-indigo-600">{s.value}</p>
              <p className="mt-1 text-gray-700">{s.label}</p>
            </div>
          ))}
        </div>
      
        {/* Graph - General Chart (Pie) */}
        <div className="w-full h-96 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">{data.chartData.title}</h2>
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data.chartData.data}
                dataKey="value"
                nameKey="name"
                outerRadius={120}
                fill="#6366f1"
                label
              >
                {data.chartData.data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Your Role */}
        <Section title="Your Role in Building Viksit Bharat" bgColor="bg-blue-50">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.roles.map((item, index) => (
              <li key={index} className="p-4 bg-white rounded-lg shadow hover:shadow-xl transition">
                <strong>{item.text}:</strong> {item.desc} <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Explore</a>
              </li>
            ))}
          </ul>
        </Section>

        {/* Government Efforts */}
        <Section title="How the Government is Contributing">
          <p className="mb-4">{data.governmentEfforts.intro}</p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.governmentEfforts.initiatives.map((item, index) => (
              <li key={index} className="p-4 bg-white rounded-lg shadow hover:shadow-xl transition">
                <strong>{item.text}:</strong> {item.desc} <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Learn More</a>
              </li>
            ))}
          </ul>
          <div className="w-full h-96 mt-8">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">{data.governmentEfforts.fundingChart.title}</h3>
            <ResponsiveContainer>
              <BarChart data={data.governmentEfforts.fundingChart.data}>
                <XAxis dataKey="year" />
                <YAxis dataKey="value" unit="% GDP" />
                <Tooltip />
                <Bar dataKey="value" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Section>

        {/* Challenges */}
        <Section title="Challenges in Fostering Creativity" bgColor="bg-red-50">
          <ul className="list-disc pl-6 space-y-2 mb-8">
            {data.challenges.list.map((item, index) => (
              <li key={index}><strong>{item.title}:</strong> {item.desc}</li>
            ))}
          </ul>
          <div className="w-full h-96 mb-10">
            <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">{data.challenges.pieChart.title}</h3>
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data.challenges.pieChart.data}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={120}
                  fill="#6366f1"
                  label
                >
                  {data.challenges.pieChart.data.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Section>

        {/* Solutions Table */}
        <Section title="Overcoming Obstacles Smartly">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-blue-100">
                  <th className="border border-gray-300 p-3">Obstacle</th>
                  <th className="border border-gray-300 p-3">Description</th>
                  <th className="border border-gray-300 p-3">Smart Solutions</th>
                </tr>
              </thead>
              <tbody>
                {data.obstacles.map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3">{row.obstacle}</td>
                    <td className="border border-gray-300 p-3">{row.desc}</td>
                    <td className="border border-gray-300 p-3">
                      {row.solution} <a href={row.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Try Now</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Bridging Skills Gap */}
        <Section title="Bridging the Skills-Industry Gap" bgColor="bg-green-50">
          <ul className="list-disc pl-6 space-y-2">
            {data.skillsGap.map((item, index) => (
              <li key={index}><strong>{item.text}:</strong> {item.desc} {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Explore</a>}</li>
            ))}
          </ul>
        </Section>

        {/* Policy Recommendations */}
        <Section title="Government Reforms for Change">
          <ul className="list-disc pl-6 space-y-2">
            {data.reforms.map((item, index) => (
              <li key={index}><strong>{item.text}:</strong> {item.desc} {item.link && <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Learn More</a>}</li>
            ))}
          </ul>
        </Section>
      </main>
    </div>
  );
}