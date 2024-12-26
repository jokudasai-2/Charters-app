-- Drop existing view
DROP VIEW IF EXISTS stakeholder_profiles;

-- Create new view with proper aggregation
CREATE VIEW stakeholder_profiles AS
SELECT 
  s.id as stakeholder_id,
  s.email,
  s.role,
  s.department,
  p.first_name,
  p.last_name,
  d.id as document_id,
  d.title as document_title,
  d.status as document_status,
  d.created_at as document_created_at,
  MAX(s.created_at) OVER (PARTITION BY s.email) as last_active
FROM stakeholders s
LEFT JOIN auth.users u ON s.email = u.email
LEFT JOIN profiles p ON u.id = p.id
LEFT JOIN documents d ON s.document_id = d.id;

-- Grant access to the view
GRANT SELECT ON stakeholder_profiles TO authenticated;

-- Add helpful comment
COMMENT ON VIEW stakeholder_profiles IS 'Provides stakeholder information with document relationships and proper last active date';